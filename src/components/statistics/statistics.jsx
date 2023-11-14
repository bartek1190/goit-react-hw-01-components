import css from './statistics.module.css';
import { getRandomColor } from './randomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title !== undefined && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: `${getRandomColor()}` }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
