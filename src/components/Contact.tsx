import React from 'react';


const Contact = () => {
    return (
         <>
        {/* ContactFooter */}
          <div className="row">
            <div className="col">
              <div className="contactFooter">
                <h4 className="text-decoration-underline">Contact</h4>
                <address>
                <a className="linkContactHeader" href="mailto:giacomettivirginie@gmail.com" title="Cliquer contacter moi" ><i className=" iconEmail bi bi-envelope"></i>giacomettivirginie@gmail.com</a>
                </address>
                <address>
                  <a className="linkContactHeader" href="tel:0618568698" title="Cliquer contacter moi" ><i className="iconTel bi bi-telephone-fill"></i>0618568698</a>
                </address>
              </div>
            </div>
          </div>

        </>
    );
}

export default Contact;