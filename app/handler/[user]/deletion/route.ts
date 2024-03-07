export default function handler(req, res) {
    // 요청을 받으면 "Hello, World!"를 응답으로 반환합니다.
    res.status(200).json({ message: 'Hello, World!' });
}