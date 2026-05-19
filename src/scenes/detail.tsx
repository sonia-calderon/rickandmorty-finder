import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { DetailContainer } from "@/pods/detail";

export const DetailPage: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const characterId = id ? parseInt(id, 10) : 0;

	return (
		<AppLayout>
			<DetailContainer id={characterId} />
		</AppLayout>
	);
};
