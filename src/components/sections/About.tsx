import Container from "../layout/Container";

export default function About() {
    return (
        <section 
            id="About"
            className="min-h-screen border flex items-center justify-center"
        >
            <Container>
                <h1 className="text-5xl font-bold">
                    About
                </h1>
            </Container>
        </section>
    );
}