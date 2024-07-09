import { Switch } from 'antd';

const ToggleActionItem = ({ title, description, state, setState }) => (
    <div className='chat_action_toggle_item'>
        <div>
            <h4 className='chat_action_item_title'>{title}</h4>
            <span className='chat_action_item_description'>{description}</span>
        </div>
        <Switch onChange={() => setState(!state)} />
    </div>
);

export default ToggleActionItem;