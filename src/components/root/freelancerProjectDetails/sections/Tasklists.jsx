import { useState } from 'react';
import taskListImage from '../../../../assets/freelancerProjectDetails/task_list.png'
import AddTasklistModal from '../modals/AddTasklistModal';

const Tasklists = () => {
    const [isAddTasklistModalOpen, setIsAddTasklistModalOpen] = useState(false);

    return (
        <div className='p_d_content_wrapper task_list_page_wrapper'>
            <div>
                <img src={taskListImage} alt="taskListImage" />
            </div>
            <div className='task_lis_page_content'>
                <h2 className='task_list_page_title'>Get more done, faster!</h2>
                <p className='task_list_page_description'>Organize your work, set deadlines, prioritize and assign tasks.</p>
                <button onClick={() => setIsAddTasklistModalOpen(true)} className='task_list_page_btn'>Add Tasklist</button>
            </div>

            {/* modals */}
            <AddTasklistModal antdModalOpen={isAddTasklistModalOpen} setAntdModalOpen={setIsAddTasklistModalOpen} />
        </div>
    );
};

export default Tasklists;