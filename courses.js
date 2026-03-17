function openModal(type){

    let content = "";

    if(type === "guitar"){
        content = `
        <h2>Guitar Mastery</h2>
        <p>Master the art of guitar playing from beginner to advanced level. 
        Learn chords, scales, and techniques used by professional performers. 
        Build confidence for live stage performances.</p>

        <ul>
            <li>Chords & Strumming Patterns</li>
            <li>Lead Guitar & Soloing</li>
            <li>Fingerstyle Techniques</li>
            <li>Stage Performance Skills</li>
        </ul>`;
    }

    else if(type === "music"){
        content = `
        <h2>Music Production</h2>
        <p>Become a complete music producer with hands-on training. 
        Learn industry-standard tools and techniques for creating professional tracks. 
        From recording to final output, master every step.</p>

        <ul>
            <li>DAWs (FL Studio, Ableton)</li>
            <li>Recording Techniques</li>
            <li>Mixing & Mastering</li>
            <li>Music Distribution</li>
        </ul>`;
    }

    else if(type === "dj"){
        content = `
        <h2>Pro DJ Course</h2>
        <p>Step into the world of professional DJing. 
        Learn how to mix tracks seamlessly and control the crowd energy. 
        Gain real club-level performance skills.</p>

        <ul>
            <li>Beat Matching</li>
            <li>Recordbox Software</li>
            <li>Live Mixing Techniques</li>
            <li>Crowd Handling Skills</li>
        </ul>`;
    }

    else if(type === "vocal"){
        content = `
        <h2>Vocal Training</h2>
        <p>Enhance your singing abilities with professional vocal training. 
        Improve pitch, tone, and vocal strength. 
        Build confidence for stage performances.</p>

        <ul>
            <li>Breath Control</li>
            <li>Pitch Accuracy</li>
            <li>Voice Modulation</li>
            <li>Stage Confidence</li>
        </ul>`;
    }

    else if(type === "piano"){
        content = `
        <h2>Piano & Keys</h2>
        <p>Learn piano from basics to advanced level. 
        Develop strong musical understanding and finger coordination. 
        Play both classical and modern compositions.</p>

        <ul>
            <li>Scales & Chords</li>
            <li>Sight Reading</li>
            <li>Improvisation</li>
            <li>Keyboard Techniques</li>
        </ul>`;
    }

    else if(type === "drum"){
        content = `
        <h2>Drumming</h2>
        <p>Build rhythm and coordination with professional drumming lessons. 
        Learn to play with precision and timing. 
        Experience playing with live bands.</p>

        <ul>
            <li>Rhythm Basics</li>
            <li>Hand Techniques</li>
            <li>Timing & Coordination</li>
            <li>Band Performance</li>
        </ul>`;
    }

    else if(type === "dance"){
        content = `
        <h2>Dance Classes</h2>
        <p>Express yourself through movement and rhythm. 
        Learn multiple dance styles with expert guidance. 
        Build confidence for stage performances.</p>

        <ul>
            <li>Hip-Hop</li>
            <li>Bollywood</li>
            <li>Freestyle</li>
            <li>Stage Performance</li>
        </ul>`;
    }

    else if(type === "taekwondo"){
        content = `
        <h2>Taekwondo Training</h2>
        <p>Learn martial arts with a focus on discipline and fitness. 
        Build strength, confidence, and self-defense skills. 
        Train under expert instructors.</p>

        <ul>
            <li>Self Defense Techniques</li>
            <li>Physical Fitness</li>
            <li>Discipline & Focus</li>
            <li>Combat Training</li>
        </ul>`;
    }

    else if(type === "art"){
        content = `
        <h2>Art Classes</h2>
        <p>Explore your creativity through professional art training. 
        Learn different forms of drawing and painting. 
        Develop your artistic skills step by step.</p>

        <ul>
            <li>Sketching Basics</li>
            <li>Painting Techniques</li>
            <li>Creative Design</li>
            <li>Color Theory</li>
        </ul>`;
    }

    document.getElementById("modal-body").innerHTML = content;
    document.getElementById("modal").style.display = "block";
}

/* CLOSE BUTTON */
document.getElementById("close-btn").onclick = function(){
    document.getElementById("modal").style.display = "none";
};

/* OUTSIDE CLICK CLOSE */
window.onclick = function(e){
    if(e.target === document.getElementById("modal")){
        document.getElementById("modal").style.display = "none";
    }
};