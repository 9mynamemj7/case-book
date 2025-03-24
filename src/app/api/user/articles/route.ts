import { NextResponse } from 'next/server';

// GET 요청 처리 (모든 아티클 가져오기)
export async function GET() {
  try {
    // DB에서 데이터를 가져오는 로직을 작성하세요.
    // 예시: const articles = await fetchArticlesFromDB();
    const articles = [{ id: 1, title: 'Example Article' }]; // 임시 데이터
    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error fetching articles:', error);
    return NextResponse.json({ message: 'Error fetching articles' }, { status: 500 });
  }
}

// POST 요청 처리 (새로운 아티클 생성)
export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { title, content } = data;

    if (!title || !content) {
      return NextResponse.json({ message: 'Title and content are required' }, { status: 400 });
    }

    // DB에 새 아티클을 저장하는 로직을 작성하세요.
    // 예시: await saveArticleToDB(title, content);

    return NextResponse.json({ message: 'Article created successfully' }, { status: 201 });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ message: 'Error creating article' }, { status: 500 });
  }
}