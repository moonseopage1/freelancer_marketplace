import { Skeleton } from 'antd';
import PropTypes from 'prop-types';

const AntdTableSkeleton = ({ columns = 6, rows = 5 }) => {
    const getSkeletonRow = (key) => (
        <div
            key={key}
            className={`sp1_marketplace_skeleton_row ${key % 2 === 1 ? 'sp1_marketplace_odd' : 'sp1_marketplace_even'}`}
        >
            {Array.from({ length: columns }).map((_, colIndex) => (
                <Skeleton.Input
                    key={colIndex}
                    style={{ width: '100%', height: '18px', flex: 1 }}
                    active
                    size="small"
                />
            ))}
        </div>
    );

    return (
        <div className="sp1_marketplace_skeleton_table">
            {Array.from({ length: rows }).map((_, rowIndex) => getSkeletonRow(rowIndex))}
        </div>
    );
};

export default AntdTableSkeleton;

AntdTableSkeleton.propTypes = {
    columns: PropTypes.number,
    rows: PropTypes.number,
};
