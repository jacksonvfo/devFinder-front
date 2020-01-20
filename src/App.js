import React from "react";
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do GitHub</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>

      </aside >
      <main>
        <ul>
          <li className="dev-item">
            <header>
            <img src="https://scontent.ftow1-1.fna.fbcdn.net/v/t1.0-9/p960x960/34561825_1536935399750049_9166154422407921664_o.jpg?_nc_cat=108&_nc_ohc=jOL8ILlyWFYAX-UAi0J&_nc_ht=scontent.ftow1-1.fna&_nc_tp=1002&oh=375eb976dd274a1d963e1fd076818472&oe=5E9E3509"></img>
              <div className="user-info">
                <strong>Bilubilu Bilu</strong>
                <span>Basic, Cobol, Assembly</span>
              </div>
            </header>
            <p>Bio bio bio bio bio bio bio bio bio bio</p>
            <a href="github.com/jacksonvfo">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
              <img src="https://scontent.ftow1-1.fna.fbcdn.net/v/t1.0-9/p960x960/34561825_1536935399750049_9166154422407921664_o.jpg?_nc_cat=108&_nc_ohc=jOL8ILlyWFYAX-UAi0J&_nc_ht=scontent.ftow1-1.fna&_nc_tp=1002&oh=375eb976dd274a1d963e1fd076818472&oe=5E9E3509"></img>
              <div className="user-info">
                <strong>Bilubilu Bilu</strong>
                <span>Basic, Cobol, Assembly</span>
              </div>
            </header>
            <p>Bio bio bio bio bio bio bio bio bio bio</p>
            <a href="github.com/jacksonvfo">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
            <img src="https://scontent.ftow1-1.fna.fbcdn.net/v/t1.0-9/p960x960/34561825_1536935399750049_9166154422407921664_o.jpg?_nc_cat=108&_nc_ohc=jOL8ILlyWFYAX-UAi0J&_nc_ht=scontent.ftow1-1.fna&_nc_tp=1002&oh=375eb976dd274a1d963e1fd076818472&oe=5E9E3509"></img>
              <div className="user-info">
                <strong>Bilubilu Bilu</strong>
                <span>Basic, Cobol, Assembly</span>
              </div>
            </header>
            <p>Bio bio bio bio bio bio bio bio bio bio</p>
            <a href="github.com/jacksonvfo">Acessar perfil no Github</a>
          </li>

          <li className="dev-item">
            <header>
            <img src="https://scontent.ftow1-1.fna.fbcdn.net/v/t1.0-9/p960x960/34561825_1536935399750049_9166154422407921664_o.jpg?_nc_cat=108&_nc_ohc=jOL8ILlyWFYAX-UAi0J&_nc_ht=scontent.ftow1-1.fna&_nc_tp=1002&oh=375eb976dd274a1d963e1fd076818472&oe=5E9E3509"></img>
              <div className="user-info">
                <strong>Bilubilu Bilu</strong>
                <span>Basic, Cobol, Assembly</span>
              </div>
            </header>
            <p>Bio bio bio bio bio bio bio bio bio bio</p>
            <a href="github.com/jacksonvfo">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
