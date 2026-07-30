import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Instagram } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  // Stagger variants for details
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        
        <div className="contact-grid">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 14 }}
            className="contact-info"
          >

            <h2 className="section-title">Let’s Start a <br /> Conversation.</h2>
            <p className="contact-desc">
              Interested in our premium collection or bulk exports? 
              Reach out to our team for personalized assistance.
            </p>

            <motion.div 
              className="contact-details"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.a 
                href="mailto:abramsgroup.co@gmail.com"
                className="detail-item" 
                variants={itemVariants}
                whileHover={{ x: 8, color: "var(--accent-olive)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
              >
                <Mail size={20} />
                <span>abramsgroup.co@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:+919400093627"
                className="detail-item" 
                variants={itemVariants}
                whileHover={{ x: 8, color: "var(--accent-olive)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
              >
                <Phone size={20} />
                <span>+91 94000 93627, 7907707990</span>
              </motion.a>
              <motion.a 
                href="https://www.google.com/maps/search/?api=1&query=Mavady+PO,+Nedumkandam,+Idukki+Kerala"
                target="_blank"
                rel="noopener noreferrer"
                className="detail-item" 
                variants={itemVariants}
                whileHover={{ x: 8, color: "var(--accent-olive)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ cursor: "pointer", textDecoration: "none", color: "inherit" }}
              >
                <MapPin size={20} />
                <span>
                  Mavady PO, Nedumkandam <br />
                  Idukki Kerala
                </span>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/abramsgroup/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="detail-item linkedin-item"
                variants={itemVariants}
                whileHover={{ x: 8, color: "#0A66C2" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Linkedin size={20} />
                <span>Abrams Group on LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://www.instagram.com/_abraams"
                target="_blank"
                rel="noopener noreferrer"
                className="detail-item instagram-item"
                variants={itemVariants}
                whileHover={{ x: 8, color: "#E1306C" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Instagram size={20} />
                <span>@_ABRAAMS on Instagram</span>
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.15 }}
            className="contact-form-container"
          >
            <form 
              className="contact-form" 
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const name = formData.get('Name');
                const email = formData.get('Email');
                const interest = formData.get('Product Interest');
                const message = formData.get('Message');
                const subject = `Website Inquiry from ${name} - ${interest}`;
                const body = `Name: ${name}\nEmail: ${email}\nInterest: ${interest}\n\nMessage:\n${message}`;
                
                // Open Gmail compose window in a new tab
                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abramsgroup.co@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                window.open(gmailUrl, '_blank');
              }}
            >
              <div className="form-group">
                <input type="text" name="Name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" name="Email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <select name="Product Interest" required defaultValue="">
                  <option value="" disabled>Product Interest</option>
                  <option value="cardamom">Cardamom</option>
                  <option value="pepper">Black Pepper</option>
                  <option value="coffee">Coffee</option>
                  <option value="clove">Clove</option>
                  <option value="ginger">Ginger</option>
                  <option value="nutmeg">Nutmeg</option>
                </select>
              </div>
              <div className="form-group">
                <textarea name="Message" placeholder="Your Message" rows="5" required></textarea>
              </div>
              <motion.button 
                type="submit" 
                className="btn btn-primary submit-btn"
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                <span>Send Message</span>
                <Send size={16} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
