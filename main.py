from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from models import Credentials, ContentUpdate
from database import session, engine
from database_models import UpcomingEvent, UpcomingOffer, UpcomingOpportunity, Credentials as DBCredentials
import database_models
import jwt
from datetime import datetime, timedelta

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

JWT_SECRET = "my_super_secret_key_2026"
JWT_ALGORITHM = "HS256"
JWT_EXP_MINUTES = 60

security = HTTPBearer()

database_models.Base.metadata.create_all(bind=engine)

# ---------------- JWT ----------------

def create_jwt(username: str):
    expire = datetime.utcnow() + timedelta(minutes=JWT_EXP_MINUTES)
    payload = {
        "sub": username,
        "exp": expire
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


def verify_jwt(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        return payload["sub"]
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ---------------- LOGIN ----------------

@app.post("/login")
def login(data: Credentials):

    db = session()

    user = db.query(DBCredentials).filter(
        DBCredentials.username == data.username
    ).first()

    if not user:
        db.close()
        raise HTTPException(status_code=401, detail="Invalid username")

    if user.password != data.password:
        db.close()
        raise HTTPException(status_code=401, detail="Invalid password")

    token = create_jwt(user.username)

    db.close()

    return {
        "status": "success",
        "token": token
    }


# ---------------- EVENT ----------------

@app.get("/event")
def get_event():

    db = session()
    event = db.query(UpcomingEvent).first()
    db.close()

    if event:
        return {"heading": event.heading, "description": event.description}

    return {"heading": "", "description": ""}


@app.post("/admin/update-event")
def update_event(data: ContentUpdate, username: str = Depends(verify_jwt)):

    db = session()
    event = db.query(UpcomingEvent).first()

    if event:
        event.heading = data.heading
        event.description = data.description
    else:
        event = UpcomingEvent(
            heading=data.heading,
            description=data.description
        )
        db.add(event)

    db.commit()
    db.close()

    return {"status": "event updated"}


# ---------------- OFFER ----------------

@app.get("/offer")
def get_offer():

    db = session()
    offer = db.query(UpcomingOffer).first()
    db.close()

    if offer:
        return {"heading": offer.heading, "description": offer.description}

    return {"heading": "", "description": ""}


@app.post("/admin/update-offer")
def update_offer(data: ContentUpdate, username: str = Depends(verify_jwt)):

    db = session()
    offer = db.query(UpcomingOffer).first()

    if offer:
        offer.heading = data.heading
        offer.description = data.description
    else:
        offer = UpcomingOffer(
            heading=data.heading,
            description=data.description
        )
        db.add(offer)

    db.commit()
    db.close()

    return {"status": "offer updated"}


# ---------------- OPPORTUNITIES ----------------

@app.get("/opportunities")
def get_opportunities():

    db = session()
    opportunities = db.query(UpcomingOpportunity).all()
    db.close()

    return opportunities


@app.post("/admin/add-opportunity")
def add_opportunity(data: ContentUpdate, username: str = Depends(verify_jwt)):

    db = session()

    new_opp = UpcomingOpportunity(
        heading=data.heading,
        description=data.description
    )

    db.add(new_opp)
    db.commit()
    db.close()

    return {"status": "opportunity added"}


@app.delete("/admin/delete-opportunity/{id}")
def delete_opportunity(id: int, username: str = Depends(verify_jwt)):

    db = session()

    opp = db.query(UpcomingOpportunity).filter(
        UpcomingOpportunity.id == id
    ).first()

    if not opp:
        raise HTTPException(status_code=404, detail="Opportunity not found")

    db.delete(opp)
    db.commit()
    db.close()

    return {"status": "opportunity deleted"}