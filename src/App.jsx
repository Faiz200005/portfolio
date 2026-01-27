import { useState } from "react";


function App() {
  const currentYear = new Date().getFullYear();

  const [activeTab, setActiveTab] = useState("cv"); // "cv" | "projects" | "diploma" | "interests"
  const [showRobotVideo, setShowRobotVideo] = useState(false);

  const changeTab = (tab) => {
    setActiveTab(tab);

    // Si on quitte "projects", on masque la vidéo
    if (tab !== "projects") {
      setShowRobotVideo(false);
    }
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="navbar-left">
          <div className="logo-dot" />
          <span className="logo-name">Faïz Chabi-Imorou</span>
          <span className="logo-role">/ Étudiant ingénieur ISN</span>
        </div>

        <nav className="navbar-right">
          <a href="#about">À propos de moi</a>

          <a
            href="#cv"
            onClick={(e) => {
              e.preventDefault();
              changeTab("cv");
              setTimeout(() => {
                const el = document.getElementById("cv");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
          >
            CV
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              changeTab("projects");
              setTimeout(() => {
                const el = document.getElementById("projects");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 50);
            }}
          >
            Projets
          </a>

          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <main className="hero">
        {/* Bloc gauche : carte profil */}
        <div className="hero-left">
          <div className="profile-card">
            <div className="profile-photo">
              <span>FC</span>
            </div>

            <div className="profile-name">Faïz Chabi-Imorou</div>
            <div className="profile-title">Étudiant ingénieur ISN</div>

            <div className="profile-separator" />

            <div className="profile-info">
              <p>ESIGELEC • Rouen</p>
              <p>Spécialisation Ingénierie des Services du Numérique</p>
            </div>

            <div className="profile-socials">
              <a href="mailto:Wanrado.chabi@groupe-esigelec.org" title="E-mail">
                @
              </a>
              <a
                href="https://www.linkedin.com/in/faiz-chabi-3b367a131"
                target="_blank"
                rel="noreferrer"
                title="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Bloc droite : Hello + onglets */}
        <section className="hero-right" id="about">
          <div className="hero-hello">Hello</div>
          <p className="hero-subtitle">Qui je suis et ce que je fais</p>

          {/* Onglets */}
          <div className="hero-tabs">
            <button
              className={activeTab === "cv" ? "tab-btn active" : "tab-btn"}
              onClick={() => changeTab("cv")}
              type="button"
            >
              CV
            </button>

            <button
              className={activeTab === "projects" ? "tab-btn active" : "tab-btn"}
              onClick={() => changeTab("projects")}
              type="button"
            >
              Projets
            </button>

            <button
              className={activeTab === "diploma" ? "tab-btn active" : "tab-btn"}
              onClick={() => changeTab("diploma")}
              type="button"
            >
              Diplôme
            </button>

            <button
              className={activeTab === "interests" ? "tab-btn active" : "tab-btn"}
              onClick={() => changeTab("interests")}
              type="button"
            >
              Centres d’intérêts
            </button>
          </div>

          {/* Texte d’intro */}
          <p className="hero-text">
            Étudiant en 4ᵉ année à l’ESIGELEC, je me spécialise en Ingénierie des
            Services du Numérique. J’aime concevoir, développer et améliorer des
            solutions numériques utiles, avec une attention particulière à la
            qualité du code et à l’expérience utilisateur.
          </p>

          <p className="hero-text">
            Ce portfolio présente mon parcours, mes expériences et une sélection de
            projets qui illustrent mes compétences en développement, en logique
            informatique et en travail en équipe.
          </p>

          {/* Contenu dynamique selon l’onglet */}
          <div className="tab-content-wrapper" id="cv">
            {/* Onglet CV */}
            {activeTab === "cv" && (
              <div className="tab-content">
                <h3>Expériences</h3>
                <ul>
                  <li>
                    <strong>Agent de tri postal – La Poste (2024)</strong> : organisation
                    des flux, respect des délais et fiabilité des livraisons.
                  </li>
                  <li>
                    <strong>Vendeur – Sonaec (2023)</strong> : accueil client, conseil,
                    gestion des stocks et mise en rayon.
                  </li>
                  <li>
                    <strong>Stage – ES INTER (2019)</strong> : découverte de solutions
                    de cybersécurité domestique sur le terrain.
                  </li>
                </ul>
              </div>
            )}

            {/* Onglet Projets */}
            {activeTab === "projects" && (
              <div className="tab-content" id="projects">
                <h3>Projets</h3>
                <ul>
                  <li>
                    <strong>Portfolio React</strong> : ce site, réalisé avec React &amp; Vite,
                    pour présenter mon profil de manière moderne et responsive.
                  </li>

                  <li>
                    <strong>Projets académiques ISN</strong> : travaux pratiques en
                    systèmes, réseaux, algorithmique et développement web.
                  </li>

                  <li>
                    <strong>Projet robot</strong> : J’ai participé à la conception et la
                    programmation d’un robot autonome dans le cadre des travaux pratiques
                    de microprocesseur. Le projet consistait à programmer en langage bas
                    niveau (C embarqué) un microcontrôleur MSP430 pour piloter : les moteurs
                    via PWM, les capteurs d’obstacles, le système de prise de décision
                    (éviter, contourner, ajuster trajectoire), la gestion des interruptions
                    et du timer.
                    <br />

                    {/* Vidéo affichée uniquement sur clic */}
                    {!showRobotVideo ? (
                      <button
                        className="show-video-btn"
                        onClick={() => setShowRobotVideo(true)}
                        type="button"
                      >
                        ▶ Voir la vidéo
                      </button>
                    ) : (
                      <div className="project-media-wrapper">
                        <button
                          className="hide-video-btn"
                          onClick={() => setShowRobotVideo(false)}
                          type="button"
                        >
                          ✕ Masquer la vidéo
                        </button>

                        <video
                          className="project-video"
                          src="/robot.mp4"
                          controls
                          playsInline
                          preload="metadata"
                        />
                      </div>
                    )}
                  </li>
                </ul>
              </div>
            )}

            {/* Onglet Diplôme */}
            {activeTab === "diploma" && (
              <div className="tab-content" id="diploma">
                <h3>Diplôme</h3>
                <p className="hero-text">
                  Diplôme d’ingénieur – Ingénierie des Services du Numérique (ISN)
ESIGELEC, Rouen — 2022 – en cours (4ᵉ année / Master 1)
                </p>

                Baccalauréat Général
EFE Montaigne, Cotonou (Bénin) — 2021 – 2022
              </div>
            )}

            {/* Onglet Centres d’intérêt */}
            {activeTab === "interests" && (
              <div className="tab-content" id="interests">
                <h3>Centres d’intérêt</h3>
                <div className="interests-grid">
                  <div className="interest-card">
                    <img className="interest-image" src="/dev.jpg" alt="Informatique & développement" />
                    <div className="interest-title">Informatique & développement</div>
                    <p className="interest-text">
                      Veille sur les nouvelles technologies, frameworks et outils liés
                      au développement logiciel et au web.
                    </p>
                  </div>

                  <div className="interest-card">
                    <img className="interest-image" src="/jeux.jpg" alt="Jeux vidéo" />
                    <div className="interest-title">Jeux vidéo</div>
                    <p className="interest-text">
                      Intérêt pour les jeux vidéo, l’univers compétitif et la logique
                      derrière le game design.
                    </p>
                  </div>

                  <div className="interest-card">
                    <img className="interest-image" src="/foot.jpeg" alt="Sport" />
                    <div className="interest-title">Sport</div>
                    <p className="interest-text">
                      Pratique sportive régulière pour garder un bon équilibre entre
                      travail, énergie et concentration.
                    </p>
                  </div>

                  <div className="interest-card">
                    <img className="interest-image" src="/voyage.jpeg" alt="Voyages" />
                    <div className="interest-title">Voyages</div>
                    <p className="interest-text">
                      Passionné par la découverte de nouvelles cultures et l’ouverture à
                      d’autres modes de vie.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* SECTION CONTACT */}
      <section className="contact-section" id="contact">
        <div className="contact-card">
          <h2>Contact</h2>
          <p>
            Intéressé(e) par mon profil ou par un projet ? N&apos;hésitez pas à me
            contacter :
          </p>
          <div className="contact-info">
            📧{" "}
            <a href="mailto:Wanrado.chabi@groupe-esigelec.org">
              Wanrado.chabi@groupe-esigelec.org
            </a>
            <br />
            📞 06 05 80 54 78
            <br />
            📍 Rouen, France
            <br />
            🔗{" "}
            <a
              href="https://www.linkedin.com/in/faiz-chabi-3b367a131"
              target="_blank"
              rel="noreferrer"
            >
              Profil LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">© {currentYear} — Portfolio de Faïz Chabi-Imorou</footer>
    </div>
  );
}

export default App;
