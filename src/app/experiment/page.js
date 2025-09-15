export default function ExperimentPage() {
  return (
    <main className="experiment">

        <div className="game-board">

          <div className="game-screen start-screen">
            <p>Click here to start</p>
          </div>

          <div className="game-screen menu-screen hidden">
            <ul className="game-main-menu">
              <li>New Game</li>
              <li>Load Game</li>
            </ul>
          </div>

          <div className="game-screen main-screen hidden">
            <div className="game-page">
              <div className="game-npc"></div>

              <div className="game-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa nibh, euismod nec viverra quis, porta vel orci. Cras sed mauris et felis accumsan eleifend. Proin dapibus nec turpis ac gravida. Integer metus turpis, eleifend eget euismod sed, dapibus ac lectus. Nullam in semper nisl, at lobortis orci. Nunc lorem mi, aliquet nec auctor fringilla, vehicula vitae enim.
                </p>
              </div>
            </div>

            <div className="game-menu">
              <div className="game-menu-portrait"></div>
              <ul className="game-menu-list">
                <li className="game-menu-button">Character</li>
                <li className="game-menu-button">Inventory</li>
                <li className="game-menu-button">Codex</li>
              </ul>
            </div>
          </div>
        </div>

    </main>
  );
}
