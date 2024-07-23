import { CircleProps } from '../types/circle.props';

export default function Circle({ name, marginBottom, size }: CircleProps) {
  return (
    <div
      className={`${name}-dot`}
      style={{
        marginBottom,
        width: size,
        height: size,
        backgroundColor: '#505050',
        borderRadius: '50%',
      }}
    ></div>
  );
}
