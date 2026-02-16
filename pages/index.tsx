import React from 'react';

export default function Home() {
  const calLink = 'https://cal.com/paul-vudmaska/15min';

  return (
    <div className="container">
      <header className="header">
        <div className="infinity-logo">∞</div>
        <h1>Paul Vudmaska</h1>
        <p className="subtitle">Full Stack Developer & Designer</p>
      </header>

      <section className="bio">
        <p>
          Rails developer with 15+ years building web applications. Specializing in backend systems, 
          frontend interfaces, and design. Currently at MBLZ. Previously Rackspace, USAA, and the Navy.
        </p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        
        <div className="job">
          <div className="job-header">
            <h3>MBLZ</h3>
            <span className="date">2016 — Present</span>
          </div>
          <p className="role">Full Stack Developer</p>
          <p>Built and maintain a CRM for small business. Handles customers, contacts, invoices, phone integration (Twilio).</p>
          <p className="tech">Ruby on Rails · Mysql · Nginx · Passenger · jQuery Mobile</p>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>Rackspace</h3>
            <span className="date">2010 — 2015</span>
          </div>
          <p className="role">Senior Developer</p>
          <p>Built internal apps for contract management. Integrated Salesforce API. Implemented encrypted document storage and sales workflows.</p>
          <p className="tech">Ruby · APIs · Salesforce · Document Encryption</p>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>USAA</h3>
            <span className="date">3 years</span>
          </div>
          <p className="role">Tech Lead</p>
          <p>Led development of intranet applications.</p>
          <p className="tech">ASP · Jscript · Backend Systems</p>
        </div>

        <div className="job">
          <div className="job-header">
            <h3>U.S. Navy</h3>
            <span className="date">4 years</span>
          </div>
          <p className="role">Flight Deck Operations (Honorable Discharge, E5)</p>
          <p>Worked flight deck of USS Saratoga. Security clearance. Attended NATO operations in Mediterranean.</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        
        <div className="skill-group">
          <h4>Backend</h4>
          <p>Ruby on Rails · Ruby · Gems · MySQL · PostgreSQL · APIs · Deployment (Nginx, Passenger, Capistrano)</p>
        </div>

        <div className="skill-group">
          <h4>Frontend</h4>
          <p>JavaScript · jQuery · jQuery Mobile · HTML · CSS (Tailwind, Bootstrap, Grid, Flexbox) · Svelte Kit</p>
        </div>

        <div className="skill-group">
          <h4>Design & Tools</h4>
          <p>Figma · UX/UI Design · Blender · Procreate · Krita · Visual Systems</p>
        </div>

        <div className="skill-group">
          <h4>DevOps & Ops</h4>
          <p>Ubuntu · SSH · Git · SSL Certificates · Digital Ocean · Linode · VS Code</p>
        </div>

        <div className="skill-group">
          <h4>Static Site Generators</h4>
          <p>Astro · Middleman · Next.js</p>
        </div>
      </section>

      <section className="art">
        <h2>3D & Art</h2>
        <p>
          Blender work exploring 3D architecture, AI art, and digital sculpture. Inspired by modernist design, 
          Kandinsky, and generative systems.
        </p>
      </section>

      <section className="cta">
        <h2>Let's Talk</h2>
        <p>Got a project in mind? Want to chat about tech, design, or Rails?</p>
        <a href={calLink} className="cta-button">
          Schedule a Call
        </a>
      </section>

      <footer className="footer">
        <p>© 2026 Paul Vudmaska. All rights reserved.</p>
      </footer>
    </div>
  );
}
