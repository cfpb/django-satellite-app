from wagtail.tests.utils import WagtailTestUtils
from django.test.client import RequestFactory
from django.core.paginator import Paginator
from django.http import Http404, HttpRequest, HttpResponse
from unittest import TestCase

from teachers_digital_platform.models.pages import validate_results_per_page

class PagingTestCases(TestCase, WagtailTestUtils):

    def test_validate_results_per_page_default_id_five(self):
        mock_request = HttpRequest()
        default_per_page = 5
        results_per_page = validate_results_per_page(mock_request)
        self.assertEqual(results_per_page, default_per_page)

    def test_validate_results_per_page_by_request_ten_is_correct(self):
        factory = RequestFactory()
        expectedVaue = 10
        mock_request = factory.get('/search/?q=test&results=' + str(expectedVaue))
        results_per_page = validate_results_per_page(mock_request)
        self.assertEqual(results_per_page, expectedVaue)

    def test_validate_results_per_page_by_request_fifty_is_correct(self):
        factory = RequestFactory()
        expectedVaue = 50
        mock_request = factory.get('/search/?q=test&results=' + str(expectedVaue))
        results_per_page = validate_results_per_page(mock_request)
        self.assertEqual(results_per_page, expectedVaue)