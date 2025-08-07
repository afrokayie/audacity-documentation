import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Own Trucks',
    Svg: require('@site/static/img/undraw_street-food_xv0c.svg').default,
    description: (
      <>
        Own revenue-generating trucks in logistics & supply-chain.
      </>
    ),
  },
  {
    title: 'Earn Income',
    Svg: require('@site/static/img/undraw_nakamoto_uy67.svg').default,
    description: (
      <>
        Earn Monthly income from the operations of these trucks.
      </>
    ),
  },
  {
    title: 'Explore DeFI',
    Svg: require('@site/static/img/undraw_connected-world_anke.svg').default,
    description: (
      <>
        Explore DeFi, lend, stake and do whatever with the tokens of your fractional truck.
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
