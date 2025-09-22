import Member from "../components/Member";

export default function About() {
    return (
        <main>
            <h1>About this site</h1>
            <p>We are using it to learn React with Next.js</p>
            <section>
                <h2>Team Members</h2>
                <Member name="Marry Berry" title="President" />
                <Member name="Harry Parahands" title="Vice-President" />
                <Member name="Ben Deeguy" title="Treasurer" />
                {/* Passing components to the Props */}
            </section>
        </main>
    );
}