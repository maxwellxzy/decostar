import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Global Reach',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
Serving clients across the world with seamless accessibility and reliable solutions.
      </>
    ),
  },
  {
    title: 'Exceptional Quality',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
Committed to delivering outstanding services tailored to meet your unique needs.
      </>
    ),
  },
  {
    title: 'Expertise You Can Trust',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
Backed by a team of seasoned professionals with a proven track record in excellence.







      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
