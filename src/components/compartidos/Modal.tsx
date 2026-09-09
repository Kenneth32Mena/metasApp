import React from "react";

interface ModalProps {
	children: React.ReactNode;
}
function Modal({ children }: ModalProps) {
	return (
		<div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
			{children}
		</div>
	);
}

export default Modal;
