
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

interface PlaceholderCardProps {
  title: string;
  description: string;
}

const PlaceholderCard: React.FC<PlaceholderCardProps> = ({ title, description }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-center py-12">
          <p className="text-gray-500">{title} functionality coming soon!</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PlaceholderCard;
