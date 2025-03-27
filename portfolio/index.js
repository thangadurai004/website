<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>thangadurai | Web Developer Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #1f1c2c, #928dab); color: #fff; }
        header { padding: 50px; text-align: center; }
        header h1 { font-size: 3rem; margin-bottom: 10px; }
        header p { font-size: 1.2rem; }
        section { padding: 60px 20px; max-width: 1100px; margin: auto; }
        section h2 { font-size: 2.5rem; text-align: center; margin-bottom: 40px; position: relative; }
        section h2::after { content: ''; width: 60px; height: 4px; background: #ff7e5f; display: block; margin: 10px auto; border-radius: 2px; }
        .about, .skills, .projects, .contact { background: rgba(255,255,255,0.05); border-radius: 15px; padding: 40px; margin-bottom: 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.25); }
        .about p { font-size: 1.1rem; line-height: 1.8; }
        .skills ul { list-style: none; display: flex; flex-wrap: wrap; gap: 15px; justify-content: center; }
        .skills li { background: rgba(255,255,255,0.1); padding: 10px 20px; border-radius: 20px; }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .project-card { background: rgba(255,255,255,0.08); border-radius: 10px; overflow: hidden; transition: transform 0.3s; }
        .project-card:hover { transform: translateY(-10px); }
        .project-card img { width: 100%; height: 150px; object-fit: cover; }
        .project-card div { padding: 20px; }
        .contact form { display: flex; flex-direction: column; gap: 15px; }
        .contact input, .contact textarea { padding: 12px; border: none; border-radius: 8px; }
        .contact button { padding: 12px; background: #ff7e5f; border: none; border-radius: 8px; color: #fff; cursor: pointer; transition: background 0.3s; }
        .contact button:hover { background: #feb47b; }
        footer { text-align: center; padding: 20px; background: rgba(0,0,0,0.2); }
    </style>
</head>
<body>
    <header>
        <h1>thangadurai</h1>
        <p>Ethical Hacker | Developer</p>
        <p>Passionate about hacking and developing new things.</p>
    </header>

    <section class="about">
        <h2>About Me</h2>
        <p>I am thangadurai, a dedicated Ethical Hacker With a focus on continuous learning, I’m currently building my skills in hacking and working towards becoming a versatile Hacker who can test appliacations with confidence.</p>
    </section>

    <section class="skills">
        <h2>Skills</h2>
        <ul>
            <li>Application Testing</li>
            <li>Bug Bounty</li>
            <li>Hacking Scripts</li>
            <li>Python</li>
            <li>PHP</li>
            <li>C</li>
            <li>Git & GitHub</li>
        </ul>
    </section>

    <section class="projects">
        <h2>Projects</h2>
        <div class="projects-grid">
            <div class="project-card">
                <img src="https://source.unsplash.com/400x300/?website" alt="Project 1">
                <div>
                    <h3>Portfolio Website</h3>
                    <p>A clean and responsive personal portfolio built with HTML, CSS, and JavaScript.</p>
                </div>
            </div>
            <div class="project-card">
                <img src="https://source.unsplash.com/400x300/?code" alt="Project 2">
                <div>
                    <h3>Coming Soon Project</h3>
                    <p>Currently working on exciting new projects. Stay tuned!</p>
                </div>
            </div>
        </div>
    </section>

    <section class="contact">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me for collaborations, projects, or just a tech chat!</p>
        <form action="mailto:your-email@example.com" method="post" enctype="text/plain">
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="email" name="email" placeholder="Your Email" required>
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
        </form>
        <p>📧 Email: <a href="thangam00411@gmail.com">thangam00411@gmail.com</a></p>
        <p>💼 GitHub: <a href="https://github.com/thangadurai004" target="_blank">"https://github.com/thangadurai004
        "</a></p>
    </section>

    <footer>
        <p>&copy; 2025 thangadurai. All Rights Reserved.</p>
    </footer>
</body>
</html>