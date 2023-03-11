import Nav from "../Nav";

function Header({ currentTab, handleTabChange }) {

    return (
        <div >
            <section>
                <header className="d-flex justify-content-around py-5">
                    <div>
                        <h1>Kida's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Nav>
                    </div>
                </header>
            </section>
            <section className="text-center">
                <div>
                    <p>
                        Welcome to Kida's portfolio page built with React.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;