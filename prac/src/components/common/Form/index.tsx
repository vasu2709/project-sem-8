"use client";
import React from "react";

type Props = {
	children: React.ReactNode;
	action: (formData: FormData) => Promise<void> | void | undefined;
};

const Form = ({ children, action }: Props) => {
	const submitAction = async (formData: FormData) => {
		const data = await action(formData);
	};

	return <form action={submitAction}>{children}</form>;
};

export default Form;
