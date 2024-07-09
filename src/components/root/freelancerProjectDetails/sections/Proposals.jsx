import { project_proposals } from '../../../../constants/projects';
import ProposalCard from '../ui/ProposalCard';

const Proposals = () => {
    return (
        <div>
            {
                project_proposals?.map((item) => <ProposalCard key={item?.id} item={item} />)
            }
        </div>
    );
};

export default Proposals;