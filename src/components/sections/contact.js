function Contact() {
    return (
      <form>
        <div>
          <label>First Name
          </label>
          <input type="text"/>
        </div>
        <div>
          <label>Last Name
          </label>
          <input type="text"/>
        </div>
        <div>
        <label>Message</label>
        <textarea></textarea>
        </div>
        <input type="submit"/>
      </form>
    );
  }
  
  export default Contact;