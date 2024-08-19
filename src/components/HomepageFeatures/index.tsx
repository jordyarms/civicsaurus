import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Principles',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Discover the core values and guiding principles that underpin effective civic tech projects. Learn how to center your work on user needs, embrace openness and transparency, iterate responsively, and build sustainable solutions.
      </>
    ),
  },
  {
    title: 'Ways of Working',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Explore the invisible design activities that support and enhance your project throughout its lifecycle. From setting a clear vision to building strong relationships, these practices will help you navigate complex challenges and drive meaningful change.
      </>
    ),
  },
  {
    title: 'Project Lifecycle',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Follow our adapted double diamond approach to guide your project from initial concept to real-world impact. Learn key activities and considerations for each phase: Explore, Reframe, Create, and Catalyze.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
