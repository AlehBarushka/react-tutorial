import styles from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
	let dialogsElements = props.state.dialogsData.map((dialog) => (
		<DialogItem name={dialog.name} id={dialog.id} />
	));

	let messagesElements = props.state.messagesData.map((messages) => (
		<Message message={messages.message} id={messages.id} />
	));

	let newMessage = props.state.newMessageText;

	const AddMessage = () => {
		props.addMessage();
	};

	const onMessageChange = (e) => {
		let newText = e.target.value;
		props.onMessageChange(newText);
	};

	return (
		<div className={styles.dialogs}>
			<div className={styles['dialog-items']}>{dialogsElements}</div>
			<div className={styles.messages}>
				{messagesElements}
				<textarea
					value={newMessage}
					onChange={onMessageChange}
					placeholder="enter your message"
				></textarea>
				<div>
					<button onClick={AddMessage}>Add Message</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
