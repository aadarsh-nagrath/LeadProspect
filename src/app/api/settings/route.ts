import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };

    await connectDB();
    const user = await User.findById(decoded.userId).select('+apiToken');

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({
      settings: {
        name: user.name,
        email: user.email,
        profilePhoto: user.profilePhoto,
        theme: user.theme,
        openLinksInApp: user.openLinksInApp,
        timezone: user.timezone,
        startWeekOn: user.startWeekOn,
        workspaceLogo: user.workspaceLogo,
        plan: user.plan,
        apiToken: user.apiToken || '',
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const token = request.cookies.get('auth-token')?.value;

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const body = await request.json();

    await connectDB();
    const user = await User.findById(decoded.userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Only update allowed fields
    const allowedUpdates = [
      'name', 
      'email', 
      'profilePhoto', 
      'theme', 
      'openLinksInApp', 
      'timezone', 
      'startWeekOn', 
      'workspaceLogo',
      'apiToken'
    ];

    allowedUpdates.forEach((field) => {
      if (body[field] !== undefined) {
        (user as any)[field] = body[field];
      }
    });

    await user.save();

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}
