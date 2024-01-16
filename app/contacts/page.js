import Image from 'next/image'

export default function Home() {
  return (
<main className='justify-center h-screen items-center'>
<div class="background-image"> 
<h1 className="contact-header">Contact us</h1><br>
</br>
<form id="contact_form" name="contact_form" method="submit">
    <div className="mb-5 row">
        <div className="col">
            <label>First Name</label>
            <input type="text" required maxlength="50" className="form-control" id="first_name" name="first_name"></input>
        </div>
        <div className="col">
            <label>Last Name</label>
            <input type="text" required maxlength="50"  className="form-control" id="last_name" name="last_name"></input>
        </div>
    </div>
    <div class="mb-5 row">
        <div class="col">
            <label for="email_addr">Email address</label>
            <input type="email" required maxlength="50" className="form-control" id="email_addr" name="email"
                placeholder="name@example.com"></input>
        </div>
    </div>
    <div className="mb-5">
        <label for="message">Message</label>
        <textarea class="form-control" id="message" name="message" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary px-4 btn-lg">Submit</button>
    </form>
    </div>
 
  
  </main>
  );
}
