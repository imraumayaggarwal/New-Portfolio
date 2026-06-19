import Container from "../layout/Container";

export default function Navbar() {
    return (
        <nav className="border-b">
            <Container>
                <div className="flex justify-between items-center h-16">
                    <div>
                        Raumay Aggarwal
                    </div>
                    <div className="flex gap-6">
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>
                    </div>
                    <div>
                        Time
                    </div>
                </div>
            </Container>
        </nav>
    );
}