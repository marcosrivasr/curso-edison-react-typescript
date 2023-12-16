import React, { useState } from "react";
import { useAppContext, type Contact } from "./store";

export default function ContactsContainer() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const store = useAppContext();

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log("handleSubmit", name, email, phone);
		const newContact: Contact = {
			id: Math.random(),
			name,
			email,
			phone,
		};
		store.addContact(newContact);
	}

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		switch (e.target.name) {
			case "name":
				setName(e.target.value);
				break;
			case "email":
				setEmail(e.target.value);
				break;
			case "phone":
				setPhone(e.target.value);
				break;
		}
	}

	return (
		<div>
			<h2>Add Contact</h2>
			<form onSubmit={handleSubmit}>
				<p>
					<label htmlFor='name'>Name</label>
					<input type='text' name='name' onChange={handleChange} value={name} />
				</p>
				<p>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						name='email'
						onChange={handleChange}
						value={email}
					/>
				</p>
				<p>
					<label htmlFor='phone'>Phone</label>
					<input
						type='tel'
						name='phone'
						onChange={handleChange}
						value={phone}
					/>
				</p>
				<p>
					<input type='submit' value='Add' />
				</p>
			</form>

			<div>
				{store.contacts.map((contact) => (
					<ContactView key={contact.id} {...contact} />
				))}
			</div>
		</div>
	);
}

interface ContactViewProps extends Contact {}

function ContactView({ name, email, phone }: ContactViewProps) {
	return (
		<div>
			<h3>{name}</h3>
			<div>{email}</div>
			<div>{phone}</div>
		</div>
	);
}
