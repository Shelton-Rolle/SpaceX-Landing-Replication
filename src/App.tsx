import { PageSection } from './components/PageSection/PageSection';
import './styles/main.css';

const bg1 = require('./images/bg-1.jpg');
const bg2 = require('./images/bg-2.jpg');
const bg3 = require('./images/bg-3.JPG');
const bg4 = require('./images/bg-4.webp');
const bg5 = require('./images/bg-5.webp');

function App() {
    return (
        <div>
            <PageSection
                subHeading="Recent Launch"
                mainHeading="Starlink Mission"
                linkLabel="Rewatch"
                src={bg1}
                alt="section-background"
                href=""
            />
            <PageSection
                subHeading="Recent Launch"
                mainHeading="Starlink Mission"
                linkLabel="Rewatch"
                src={bg2}
                alt="section-background"
                href=""
            />
            <PageSection
                subHeading="Recent Launch"
                mainHeading="Starlink Mission"
                linkLabel="Rewatch"
                src={bg3}
                alt="section-background"
                href=""
            />
            <PageSection
                mainHeading="Starship selected by NASA to support sustained lunar exploration"
                linkLabel="Learn More"
                src={bg4}
                alt="section-background"
                href=""
            />
            <PageSection
                mainHeading="Starship Update"
                linkLabel="Learn More"
                src={bg5}
                alt="section-background"
                href=""
            />
        </div>
    );
}

export default App;
