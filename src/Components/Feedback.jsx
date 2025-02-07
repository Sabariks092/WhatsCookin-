import React, { useState } from "react";

const Feedback = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
   <>
    <h1 className="text-center" style={styles.header}>Feedback!</h1>
    <div style={styles.container}>
      <p style={styles.text}>
        Let us know your thoughts about our 300+ recipes and your experience using our platform. Your feedback helps us improve!
      </p>
      {submitted ? (
        <p style={styles.successMessage}>Thank you for your feedback!</p>
      ) : (
        <form className="mx-auto" onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <textarea
            placeholder="Your Feedback"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={styles.textarea}
            required
          />
          <button className="mx-auto rounded-5" type="submit" style={styles.button}>
            Submit Feedback
          </button>
        </form>
      )}
    </div>
   </>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    textAlign: "center",
    border: "2px solid rgb(146, 140, 137)",
    borderRadius: "8px",
    backgroundColor: "rgb(19, 18, 18)",
  },
  header: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "16px",
    marginBottom: "20px",
  },
  successMessage: {
    color: "green",
    fontSize: "18px",
    marginTop: "10px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    width:"70%",
    justifyContent:"center",
    justifyItems:"center",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "rgb(37, 36, 36)",

  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    minHeight: "100px",
    backgroundColor: "rgb(37, 36, 36)",

  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "red",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width:"180px"
  },
};

export default Feedback;
