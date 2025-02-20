export default function MapSection() {
  return (
    <div className="h-[400px] w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.461447127217!2d66.98635777607541!3d24.88223694438446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315e450512243%3A0x629d617e1c86d324!2sQASR-E-ANSARI%20Sweets%20%26%20Bakers!5e0!3m2!1sen!2s!4v1738829071771!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }} 
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-full" 
      ></iframe>
    </div>
  );
}
