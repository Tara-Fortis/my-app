import Member from "../components/Member";
import PageTitle from "../components/PageTitle";


export default function About() {
    const array1: number[] = [1, 4, 9, 16];
    const map1: number[] = array1.map(x => x * 2);
    
    return (

        <main>
            <PageTitle title="About" />
            <h1>About this site</h1>
            <p>We are using it to learn React with Next.js</p>
            <section>
                <h2>Team Members</h2>
                <Member name="Marry Berry" title="President" />
                <Member name="Harry Parahands" title="Vice-President" />
                <Member name="Ben Deeguy" title="Treasurer" />
                {/* Passing components to the Props */}
            </section>
            <p>{map1}</p>
        </main>
    );
}