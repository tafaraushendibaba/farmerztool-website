from django import forms

class DemoRequestForm(forms.Form):
    name = forms.CharField(max_length=100, required=True)
    email = forms.EmailField(required=True)
    farm_size = forms.CharField(
        max_length=50,
        required=True,
        widget=forms.Select(choices=[
            ('small', 'Small (1-10 acres)'),
            ('medium', 'Medium (11-50 acres)'),
            ('large', 'Large (50+ acres)'),
        ])
    )
    farm_type = forms.CharField(
        max_length=50,
        required=True,
        widget=forms.Select(choices=[
            ('crops', 'Crops'),
            ('livestock', 'Livestock'),
            ('mixed', 'Mixed Farming'),
            ('homestead', 'Homestead'),
        ])
    )
    message = forms.CharField(
        widget=forms.Textarea,
        required=False,
        help_text="Tell us more about your farming operation and what you're looking for."
    )

    def clean_email(self):
        email = self.cleaned_data.get('email')
        if email and not email.lower().endswith(('.com', '.org', '.net', '.edu', '.gov')):
            raise forms.ValidationError("Please enter a valid email address.")
        return email.lower()
