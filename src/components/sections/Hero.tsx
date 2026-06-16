import Container from "../layout/Container";

export default function Hero() {
    return (
        <section 
            id="Hero"
            className="min-h-screen border flex items-center justify-center"
        >
            <Container>
                <h1 className="text-5xl font-bold">
                    Hero
                </h1>
            </Container>
        </section>
    );
}