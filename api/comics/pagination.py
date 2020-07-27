from django.conf import settings
from rest_framework import pagination


class PageNumberPaginationWithCount(pagination.PageNumberPagination):
    page_size_query_param = 'size'
    def get_paginated_response(self, data):
        response = super(PageNumberPaginationWithCount,
                         self).get_paginated_response(data)
        response.data['total_pages'] = self.page.paginator.num_pages
        return response
