import { connectDB } from '../../../../lib/db';
import Message from '../../../../models/Message';

connectDB();

export async function GET() {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return new Response(JSON.stringify(messages), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to fetch messages' }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    await Message.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Deleted successfully' }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Failed to delete message' }), { status: 500 });
  }
}
