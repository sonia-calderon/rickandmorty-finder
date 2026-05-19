import React from "react";
import { CharacterDetailEntity } from "./detail.vm";
import {
	Stack,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Button,
	Box,
	Chip,
	Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface Props {
	character?: CharacterDetailEntity;
	onGoBack: () => void;
}

const statusColors: Record<string, string> = {
	Alive: "#00D084",
	Dead: "#FF4757",
	unknown: "#FFD93D",
};

const StyledButton = styled(Button)(({ theme }) => ({
	textTransform: "none",
	fontSize: "1rem",
	fontWeight: 600,
	backgroundColor: "#00D084",
	color: "#1a1a2e",
	padding: "12px 24px",
	borderRadius: "8px",
	border: "2px solid #00D084",
	transition: "all 0.3s cubic-bezier(0.19, 1, 0.22, 1)",
	"&:hover": {
		backgroundColor: "#16213e",
		borderColor: "#00FF84",
		transform: "translateY(-2px)",
		boxShadow: "0 8px 16px rgba(0, 208, 132, 0.4)",
	},
	"&:active": {
		transform: "translateY(0)",
	},
	[theme.breakpoints.down("sm")]: {
		width: "100%",
		fontSize: "0.95rem",
		padding: "10px 20px",
	},
}));

const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: "transparent",
	border: "2px solid #00D084",
	borderRadius: "12px",
	overflow: "hidden",
	transition: "all 0.3s ease",
	boxShadow: "0 8px 24px rgba(0, 208, 132, 0.2)",
	"&:hover": {
		boxShadow: "0 12px 32px rgba(0, 208, 132, 0.3)",
	},
}));

const InfoRow = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: theme.spacing(2),
	paddingBottom: theme.spacing(1.5),
	paddingTop: theme.spacing(1.5),
	borderBottom: "1px solid rgba(0, 208, 132, 0.2)",
	"&:last-child": {
		borderBottom: "none",
	},
	[theme.breakpoints.down("sm")]: {
		flexDirection: "column",
		gap: theme.spacing(1),
	},
}));

const InfoLabel = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: theme.spacing(1),
	minWidth: "140px",
	color: "#00D084",
	fontWeight: 600,
	fontSize: "1rem",
	[theme.breakpoints.down("sm")]: {
		minWidth: "auto",
		fontSize: "0.95rem",
	},
}));

const InfoValue = styled(Typography)(({ theme }) => ({
	color: "#fff",
	fontSize: "1rem",
	flex: 1,
	[theme.breakpoints.down("sm")]: {
		fontSize: "0.95rem",
	},
}));

export const DetailComponent: React.FC<Props> = (props) => {
	const { character, onGoBack } = props;

	return (
		<Stack spacing={3} sx={{ width: "100%", px: { xs: 1, sm: 0 } }}>
			<Button
				startIcon={<ArrowBackIcon />}
				onClick={onGoBack}
				component={StyledButton}
				sx={{ alignSelf: "flex-start" }}
			>
				Back to List
			</Button>

			{character && (
				<StyledCard>
					<Stack
						direction={{ xs: "column", md: "row" }}
						spacing={0}
						sx={{
							height: "100%",
						}}
					>
						{/* Image Section */}
						<Box
							sx={{
								width: { xs: "100%", md: "45%" },
								background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								p: { xs: 2, sm: 3 },
								minHeight: { xs: "350px", sm: "450px", md: "auto" },
							}}
						>
							<CardMedia
								component="img"
								image={character.image}
								alt={character.name}
								sx={{
									width: "100%",
									height: "100%",
									objectFit: "cover",
									borderRadius: "8px",
									border: "2px solid rgba(0, 208, 132, 0.3)",
								}}
							/>
						</Box>

						{/* Info Section */}
						<CardContent
							sx={{
								flex: 1,
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								p: { xs: 2.5, sm: 3.5, md: 4 },
								gap: 2,
								background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
							}}
						>
							<Box>
								<Typography
									variant="h3"
									sx={{
										fontWeight: 700,
										color: "#00D084",
										fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" },
										mb: 1,
										textTransform: "uppercase",
										letterSpacing: "1px",
									}}
								>
									{character.name}
								</Typography>

								{/* Status Chip */}
								<Chip
									label={character.status}
									sx={{
										backgroundColor:
											statusColors[character.status] || "#FFD93D",
										color: "#1a1a2e",
										fontWeight: 600,
										fontSize: { xs: "0.85rem", sm: "0.95rem" },
										p: 0.5,
										height: "auto",
									}}
								/>
							</Box>

							<Divider sx={{ borderColor: "rgba(0, 208, 132, 0.3)", my: 1 }} />

							{/* Character Info */}
							<Stack spacing={0}>
								<InfoRow>
									<InfoLabel>
										<PersonIcon sx={{ fontSize: "1.2rem" }} />
										<span>Species</span>
									</InfoLabel>
									<InfoValue>{character.species}</InfoValue>
								</InfoRow>

								{character.type && (
									<InfoRow>
										<InfoLabel>
											<PersonIcon sx={{ fontSize: "1.2rem" }} />
											<span>Type</span>
										</InfoLabel>
										<InfoValue>{character.type}</InfoValue>
									</InfoRow>
								)}

								<InfoRow>
									<InfoLabel>
										<PublicIcon sx={{ fontSize: "1.2rem" }} />
										<span>Origin</span>
									</InfoLabel>
									<InfoValue>{character.origin.name}</InfoValue>
								</InfoRow>

								{character.location && (
									<InfoRow>
										<InfoLabel>
											<LocationOnIcon sx={{ fontSize: "1.2rem" }} />
											<span>Location</span>
										</InfoLabel>
										<InfoValue>{character.location.name}</InfoValue>
									</InfoRow>
								)}
							</Stack>
						</CardContent>
					</Stack>
				</StyledCard>
			)}
		</Stack>
	);
};
