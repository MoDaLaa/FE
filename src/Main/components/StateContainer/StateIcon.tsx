import * as Styled from '../../css/icon.button.styled';
import sunny from '../../../../public/png/sun.icon.png';
import stamp from '../../../../public/png/stamp.icon.png';

const iconMap = {
    sunny: sunny,
    stamp: stamp,
};

export default function StateIcon({ state }) {
    const iconSrc = iconMap[state] || null;

    return (
        iconSrc ? <Styled.StateIcon src={iconSrc} /> : null
    );
}
