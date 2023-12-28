import React from "react";
import '../style/projects.css';
import img from '../img/projectdemo.png';

function Projects() {
    return (
        <section className="projects">
            <p className="projectTitle">My Projects</p>
            <div className="all">
                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            {/* <p>Project name</p> */}
                            <img src={img} alt="" className="projectimg" />
                        </div>
                        <div class="content">
                            <p class="heading">Project Name</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            {/* <p>Project name</p> */}
                            <img src={img} alt="" className="projectimg" />
                        </div>
                        <div class="content">
                            <p class="heading">Project Name</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            {/* <p>Project name</p> */}
                            <img src={img} alt="" className="projectimg" />
                        </div>
                        <div class="content">
                            <p class="heading">Project Name</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            {/* <p>Project name</p> */}
                            <img src={img} alt="" className="projectimg" />
                        </div>
                        <div class="content">
                            <p class="heading">Project Name</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            {/* <p>Project name</p> */}
                            <img src={img} alt="" className="projectimg" />
                        </div>
                        <div class="content">
                            <p class="heading">Project Name</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="card-container">
                    <div class="card">
                        <div class="front-content">
                            {/* <p>Project name</p> */}
                            <img src={img} alt="" className="projectimg" />
                        </div>
                        <div class="content">
                            <p class="heading">Project Name</p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipii
                                voluptas ten mollitia pariatur odit, ab
                                minus ratione adipisci accusamus vel est excepturi laboriosam magnam
                                necessitatibus dignissimos molestias.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Projects;