import { connectDB } from '../../../../lib/db';
import Project from '../../../../models/Project';

connectDB();

export async function GET() {
  try {
    const projects = await Project.find({});
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to fetch projects' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, link } = await req.json();
    if (!name || !link) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    const project = await Project.create({ name, link });
    return new Response(JSON.stringify(project), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to create project' }), { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { id, name, link } = await req.json();
    if (!id || !name || !link) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    const updatedProject = await Project.findByIdAndUpdate(id, { name, link }, { new: true });
    return new Response(JSON.stringify(updatedProject), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to update project' }), { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json();
    if (!id) return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });
    await Project.findByIdAndDelete(id);
    return new Response(JSON.stringify({ message: 'Project deleted' }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Failed to delete project' }), { status: 500 });
  }
}
