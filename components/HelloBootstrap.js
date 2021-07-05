import React from "react";

function HelloBootstrap() {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
            <button className="navbar-brand" href="#">Navbar</button>
            </nav>

            <nav class="navbar navbar-light bg-light">
            <span class="navbar-brand mb-0 h1">Navbar</span>
            </nav>

            <div class="jumbotron">
                <h1 class="display-4">Hello, world!</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4">
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>


        </div>
    )};

export default HelloBootstrap;
