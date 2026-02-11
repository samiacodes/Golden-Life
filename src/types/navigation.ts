export interface NavItem {
    title: string;
    url: string;
    icon?: React.ComponentType;
    isActive?: boolean;
    items?: {
        title: string;
        url: string;
    }[];
}

export interface NavItemWithIcon extends NavItem {
    icon: React.ComponentType;
    isActive: boolean;
    items: {
        title: string;
        url: string;
    }[];
}

export interface Category {
    id: string;
    name: string;
    icon: React.ComponentType;
    path: string;
}

export interface NavData {
    user: {
        name: string;
        email: string;
        avatar: string;
    };
    categories: Category[];
    navMain: Record<string, NavItem[]>;
}