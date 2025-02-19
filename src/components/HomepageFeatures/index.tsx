import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: '自动生成代码',
    // Svg: require('@site/static/img/logo.svg').default,
    description: (
      <div style={{ textAlign: 'left' }}>
        AI 编程工具能够根据需求，自动生成代码，帮助开发者提升编程效率。 
      </div>
    ),
  },
  {
    title: '自动代码补全',
    // Svg: require('@site/static/img/logo.svg').default,
    description: (
      <div style={{ textAlign: 'left' }}>
        AI 编程工具提供代码自动补全功能，帮助开发者快速编写、优化代码。 
      </div>
    ),
  },
  {
    title: '自动生成单元测试',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <div style={{ textAlign: 'left' }}>
        AI 编程工具可以自动生成测试用例，提升测试效率，确保代码质量。
      </div>
    ),
  },
  {
    title: '自动生成代码注释',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <div style={{ textAlign: 'left' }}>
        AI 编程工具能够自动生成代码注释，显著提升了代码的可读性和可维护性。
      </div>
    ),
  },
  {
    title: '自动生成技术方案',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <div style={{ textAlign: 'left' }}>
        AI 编程工具能够根据提供的代码仓库进行全局代码分析，自动生成相关的技术文档，非常方便对已有仓库进行重构和升级。
      </div>
    ),
  },
  {
    title: '自动生成流程图',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <div style={{ textAlign: 'left' }}>
        AI 编程工具能够根据需求，自动生成流程图，提升建模效率。
      </div>
    ),
  },
];

function Feature({title,  description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureBox}> {/* 添加带有阴影样式的容器 */}
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
