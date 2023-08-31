import { faker } from "@faker-js/faker";
import { Fragment } from "react";

const Albums = ({albums}) => {

    const albumsMarkup = () => {
        return (
            <div className="container">
              <button className="btn btn-sm btn-primary mb-2">
              <i className="bi bi-folder-plus"></i>
              </button>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Photo Album #1 The Journey
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse hide" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <button className="btn btn-sm btn-success mb-1">
                      <i className="bi bi-cloud-plus-fill"></i>
                      </button>
                      <br/>
                      <img src={ faker.image.animals() } className="img-thumbnail" alt="..." width={ "120px" }/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )
    }
    return (
        <div className="row py-4">
            { albumsMarkup() }
        </div>
    );
}
export default Albums;