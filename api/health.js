export default function handler(_request, response) {
  return response.status(200).json({
    success: true,
    message: "ok",
  });
}
