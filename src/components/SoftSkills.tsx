import React from 'react';


const SoftSkills = () => {
    return (
        <>
        <section className=' container-fluid'>
            <div className="row ">

                <div className='col boxService'>

                    <div className="serviceIcon my-3">
                        <i className="display-5 bi bi-hourglass "></i>
                        <h3 className="fs-5 mt-2 ">Patience & persévérance</h3>
                    </div>

                    <div className="serviceIcon my-3">
                        <i className="display-5 bi bi-person-fill "></i>
                        <i className="display-5 bi bi-person-fill "></i>
                        <h3 className="fs-5 mt-2 ">Travail en collaboration & esprit d'équipe</h3>
                    </div>

                    <div className="serviceIcon my-3">
                        <i className="display-5 bi bi-list-task "></i>
                        <h3 className="fs-5 mt-2 ">Capacité d'adaptation & organisation</h3>
                    </div>

                    <div className="serviceIcon my-3">
                        <i className="display-5 bi bi-chat-dots"></i>
                        <h3 className="fs-5 mt-2 ">Échange & coordination</h3>
                    </div>

                    <div className="serviceIcon my-3">
                        <i className="display-5 bi bi-book "></i>
                        <h3 className="fs-5 mt-2 ">Curiosité & soif d'apprendre</h3>
                    </div>
                </div>
            </div>

        </section>
        </>
    );
}

export default SoftSkills;