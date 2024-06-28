 export const Home = () => {
    return (
        <>
        <main>
            <section className="section-1">
                <div className="container grid grid-two-col">
                    <div className="section1-content">
                        <p>We are World's one of the Good IT Company</p>
                        <h2>Welcome to D'Cube Technologies</h2>
                        <p>
                            Get Ready to levelup your business with edge-cutting IT solutions!
                            At D'Cube Tech, we specialize in providing innovative IT services & solutions tto meet your 
                            unique needs. 
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                                <button className="btn">Connect Now</button>
                            </a>
                        </div>
                    </div>
                    {/* Images */} 
                    <div className="section-image">
                        <img src="/images/Home.jpg" alt="Coding" width={300} height={400}/>
                    </div>
                </div>
            </section>
        </main>
        </>
    );

};